import { Box, Button, Paper, Skeleton } from "@mantine/core";

export default function SkeletonCard({ style }) {
  return (
    <Paper style={style} withBorder className="subscription-card">
      <span className="category">
        <Skeleton visible height={20} radius={32} />
      </span>
      <Box p="sm" className="title">
        <Skeleton visible height={40} width="60%" />
      </Box>
      <Box pad="sm" className="attributes">
        <Skeleton visible height={20} width={94} radius={32} />
        <Skeleton visible height={20} width={81} radius={32} />
        <Skeleton visible height={20} width={74} radius={32} />
      </Box>
      <Box p="sm" className="description">
        <Skeleton visible height={26} width="80%" />
      </Box>
      <Button disabled loading>
        View Docs
      </Button>
    </Paper>
  );
}
