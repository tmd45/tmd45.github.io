import * as React from "react"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

import { MuiNextLink, MuiNextLinkProps } from "./MuiNextLink"

export interface Props extends MuiNextLinkProps {
  readonly noExternalIcon?: boolean
}

/**
 * 通常のリンクはこちらのコンポーネントを使うこと
 *
 * 外部リンクアイコンを表示したい場合は、文章中にインラインで使用する
 *
 * @example
 * <Typography>
 *   こちらの<Link>リンク先</Link>を確認してください。
 * </Typography>
 */
// eslint-disable-next-line react/display-name
export const Link = React.forwardRef<HTMLAnchorElement, Props>(
  ({ href, noExternalIcon, children, ...rest }, ref) => {
    const isExternal =
      typeof href === "string" &&
      (href.startsWith("http") || href.startsWith("mailto:"))
    return (
      <MuiNextLink
        ref={ref}
        href={href}
        sx={{ display: "inline-flex", alignItems: "center" }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
        {isExternal && !noExternalIcon && (
          <OpenInNewIcon
            fontSize="inherit"
            sx={{
              marginLeft: "0.15em",
            }}
          />
        )}
      </MuiNextLink>
    )
  }
)
