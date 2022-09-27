
/** Retrieve a list of educationOutcome objects.  There are three types of outcomes: **educationPointsOutcome**, **educationFeedbackOutcome**, and **educationRubricOutcome**. A submission for a credit assignment (one that has no point value and no rubric) will have an educationFeedbackOutcome. (It might also return an educationPointsOutcome, but that outcome is ignored.) A submission for a points assignment (one that has a point value assigned) will have both an educationFeedbackOutcome and an educationPointsOutcome. A submission for an assignment with an attached rubric, if the rubric is a credit rubric (no points), will have an educationFeedbackOutcome and an educationRubricOutcome. (It might also return an educationPointsOutcome, but that outcome is ignored.) A submission for an assignment with an attached rubric, if the rubric is a points rubric, will have an educationFeedbackOutcome, an educationPointsOutcome. All outcome types have a regular and a published property appropriate to that type of outcome; for example, **points** and **publishedPoints**, **feedback** and **publishedFeedback**.  The regular property is the most recent value updated by the teacher; the published property is the most recent value returned to the student. */
export class OutcomesRequestBuilderGetQueryParameters {
    /** Include count of items */
    public count?: boolean | undefined;
    /** Expand related entities */
    public expand?: string[] | undefined;
    /** Filter items by property values */
    public filter?: string | undefined;
    /** Order items by property values */
    public orderby?: string[] | undefined;
    /** Search items by search phrases */
    public search?: string | undefined;
    /** Select properties to be returned */
    public select?: string[] | undefined;
    /** Skip the first n items */
    public skip?: number | undefined;
    /** Show only the first n items */
    public top?: number | undefined;
    /**
     * Maps the query parameters names to their encoded names for the URI template parsing.
     * @param originalName The original query parameter name in the class.
     * @returns a string
     */
    public getQueryParameter(originalName: string | undefined) : string {
        if(!originalName) throw new Error("originalName cannot be undefined");
        switch(originalName) {
            case "count": return "%24count";
            case "expand": return "%24expand";
            case "filter": return "%24filter";
            case "orderby": return "%24orderby";
            case "search": return "%24search";
            case "select": return "%24select";
            case "skip": return "%24skip";
            case "top": return "%24top";
            default: return originalName;
        }
    };
}
