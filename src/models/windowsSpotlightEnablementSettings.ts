/**
 * Allows IT admind to set a predefined default search engine for MDM-Controlled devices
 */
export enum WindowsSpotlightEnablementSettings {
    /** Spotlight on lock screen is not configured */
    NotConfigured = "notConfigured",
    /** Disable Windows Spotlight on lock screen */
    Disabled = "disabled",
    /** Enable Windows Spotlight on lock screen */
    Enabled = "enabled",
}
