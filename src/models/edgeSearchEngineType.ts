/**
 * Allows IT admind to set a predefined default search engine for MDM-Controlled devices
 */
export enum EdgeSearchEngineType {
    /** Uses factory settings of Edge to assign the default search engine as per the user market */
    DefaultEscaped = "default",
    /** Sets Bing as the default search engine */
    Bing = "bing",
}
