/**
 * Web Browser Cookie Settings.
 */
export enum WebBrowserCookieSettings {
    /** Browser default value, no intent. */
    BrowserDefault = "browserDefault",
    /** Always block cookies. */
    BlockAlways = "blockAlways",
    /** Allow cookies from current Web site. */
    AllowCurrentWebSite = "allowCurrentWebSite",
    /** Allow Cookies from websites visited. */
    AllowFromWebsitesVisited = "allowFromWebsitesVisited",
    /** Always allow cookies. */
    AllowAlways = "allowAlways",
}
