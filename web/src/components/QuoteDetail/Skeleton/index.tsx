import { useMemo } from "react";
import { Text, Input, Skeleton } from "@chakra-ui/react";

const generateArray = (size: number): number[] => {
  return Array.from({ length: size }, (_, i) => i + 1);
};

export default function SkeletonBody() {
  const fakeLines = useMemo(() => generateArray(8), []);

  return (
    <>
      {fakeLines.map((line) => (
        <Skeleton>
          <Text>Departure Location</Text>
          <Input isReadOnly size="sm" />
        </Skeleton>
      ))}
    </>
  );
}
