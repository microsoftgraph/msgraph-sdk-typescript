
/** Delete ref of navigation property userFlowIdentityProviders for identity */
export class RefRequestBuilderDeleteQueryParameters {
    /** Delete Uri */
    public id?: string | undefined;
    /**
     * Maps the query parameters names to their encoded names for the URI template parsing.
     * @param originalName The original query parameter name in the class.
     * @returns a string
     */
    public getQueryParameter(originalName: string | undefined) : string {
        if(!originalName) throw new Error("originalName cannot be undefined");
        switch(originalName) {
            case "id": return "%40id";
            default: return originalName;
        }
    };
}
