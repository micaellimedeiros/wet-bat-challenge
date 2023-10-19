import { useMemo } from "react";
import { Tr, Td, SkeletonText, SkeletonCircle } from "@chakra-ui/react";

const generateArray = (size: number): number[] => {
  return Array.from({ length: size }, (_, i) => i + 1);
};

export default function SkeletonBody() {
  const fakeLines = useMemo(() => generateArray(8), []);

  return (
    <>
      {fakeLines.map((line) => (
        <Tr key={`fake-line${line}`}>
          <Td>
            <SkeletonText noOfLines={1} spacing="4" />
          </Td>
          <Td>
            <SkeletonText noOfLines={1} spacing="4" />
          </Td>
          <Td>
            <SkeletonText noOfLines={1} spacing="4" />
          </Td>
          <Td>
            <SkeletonText noOfLines={1} spacing="4" />
          </Td>
          <Td>
            <SkeletonText noOfLines={1} spacing="4" />
          </Td>
          <Td>
            <SkeletonCircle size="10" />
          </Td>
        </Tr>
      ))}
    </>
  );
}
