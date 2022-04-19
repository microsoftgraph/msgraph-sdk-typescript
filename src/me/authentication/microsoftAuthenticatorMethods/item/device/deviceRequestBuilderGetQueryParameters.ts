
/** The registered device on which Microsoft Authenticator resides. This property is null if the device is not registered for passwordless Phone Sign-In.  */
export class DeviceRequestBuilderGetQueryParameters {
    /** Expand related entities  */
    public expand?: string[] | undefined;
    /** Select properties to be returned  */
    public select?: string[] | undefined;
    /**
     * Maps the query parameters names to their encoded names for the URI template parsing.
     * @param originalName The original query parameter name in the class.
     * @returns a string
     */
    public getQueryParameter(originalName: string | undefined) : string {
        if(!originalName) throw new Error("originalName cannot be undefined");
        switch(originalName) {
            case "expand": return "%24expand";
            case "select": return "%24select";
            default: return originalName;
        }
    };
}
