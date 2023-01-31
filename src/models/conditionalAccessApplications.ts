import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessApplications implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Can be one of the following:  The list of client IDs (appId) explicitly excluded from the policy. Office365 - For the list of apps included in Office365, see Conditional Access target apps: Office 365 */
    private _excludeApplications?: string[] | undefined;
    /** Can be one of the following:  The list of client IDs (appId) the policy applies to, unless explicitly excluded (in excludeApplications)  All  Office365 - For the list of apps included in Office365, see Conditional Access target apps: Office 365 */
    private _includeApplications?: string[] | undefined;
    private _includeAuthenticationContextClassReferences?: string[] | undefined;
    /** User actions to include. Supported values are urn:user:registersecurityinfo and urn:user:registerdevice */
    private _includeUserActions?: string[] | undefined;
    private _odataType?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new conditionalAccessApplications and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the excludeApplications property value. Can be one of the following:  The list of client IDs (appId) explicitly excluded from the policy. Office365 - For the list of apps included in Office365, see Conditional Access target apps: Office 365
     * @returns a string
     */
    public get excludeApplications() {
        return this._excludeApplications;
    };
    /**
     * Sets the excludeApplications property value. Can be one of the following:  The list of client IDs (appId) explicitly excluded from the policy. Office365 - For the list of apps included in Office365, see Conditional Access target apps: Office 365
     * @param value Value to set for the excludeApplications property.
     */
    public set excludeApplications(value: string[] | undefined) {
        this._excludeApplications = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludeApplications": n => { this.excludeApplications = n.getCollectionOfPrimitiveValues<string>(); },
            "includeApplications": n => { this.includeApplications = n.getCollectionOfPrimitiveValues<string>(); },
            "includeAuthenticationContextClassReferences": n => { this.includeAuthenticationContextClassReferences = n.getCollectionOfPrimitiveValues<string>(); },
            "includeUserActions": n => { this.includeUserActions = n.getCollectionOfPrimitiveValues<string>(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the includeApplications property value. Can be one of the following:  The list of client IDs (appId) the policy applies to, unless explicitly excluded (in excludeApplications)  All  Office365 - For the list of apps included in Office365, see Conditional Access target apps: Office 365
     * @returns a string
     */
    public get includeApplications() {
        return this._includeApplications;
    };
    /**
     * Sets the includeApplications property value. Can be one of the following:  The list of client IDs (appId) the policy applies to, unless explicitly excluded (in excludeApplications)  All  Office365 - For the list of apps included in Office365, see Conditional Access target apps: Office 365
     * @param value Value to set for the includeApplications property.
     */
    public set includeApplications(value: string[] | undefined) {
        this._includeApplications = value;
    };
    /**
     * Gets the includeAuthenticationContextClassReferences property value. 
     * @returns a string
     */
    public get includeAuthenticationContextClassReferences() {
        return this._includeAuthenticationContextClassReferences;
    };
    /**
     * Sets the includeAuthenticationContextClassReferences property value. 
     * @param value Value to set for the includeAuthenticationContextClassReferences property.
     */
    public set includeAuthenticationContextClassReferences(value: string[] | undefined) {
        this._includeAuthenticationContextClassReferences = value;
    };
    /**
     * Gets the includeUserActions property value. User actions to include. Supported values are urn:user:registersecurityinfo and urn:user:registerdevice
     * @returns a string
     */
    public get includeUserActions() {
        return this._includeUserActions;
    };
    /**
     * Sets the includeUserActions property value. User actions to include. Supported values are urn:user:registersecurityinfo and urn:user:registerdevice
     * @param value Value to set for the includeUserActions property.
     */
    public set includeUserActions(value: string[] | undefined) {
        this._includeUserActions = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("excludeApplications", this.excludeApplications);
        writer.writeCollectionOfPrimitiveValues<string>("includeApplications", this.includeApplications);
        writer.writeCollectionOfPrimitiveValues<string>("includeAuthenticationContextClassReferences", this.includeAuthenticationContextClassReferences);
        writer.writeCollectionOfPrimitiveValues<string>("includeUserActions", this.includeUserActions);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
