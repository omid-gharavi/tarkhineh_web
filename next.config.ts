import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
};

const sentryPluginOptions = withSentryConfig(
  nextConfig,
  {
    silent: true,
    widenClientFileUpload: true,
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
  }
);

export default sentryPluginOptions;