import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppIdentity implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Refers to the Unique GUID representing Application Id in the Azure Active Directory. */
    private _appId?: string | undefined;
    /** Refers to the Application Name displayed in the Azure Portal. */
    private _displayName?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Refers to the Unique GUID indicating Service Principal Id in Azure Active Directory for the corresponding App. */
    private _servicePrincipalId?: string | undefined;
    /** Refers to the Service Principal Name is the Application name in the tenant. */
    private _servicePrincipalName?: string | undefined;
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
     * Gets the appId property value. Refers to the Unique GUID representing Application Id in the Azure Active Directory.
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. Refers to the Unique GUID representing Application Id in the Azure Active Directory.
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Instantiates a new appIdentity and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. Refers to the Application Name displayed in the Azure Portal.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Refers to the Application Name displayed in the Azure Portal.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "appId": n => { this.appId = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "servicePrincipalId": n => { this.servicePrincipalId = n.getStringValue(); },
            "servicePrincipalName": n => { this.servicePrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
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
        writer.writeStringValue("appId", this.appId);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("servicePrincipalId", this.servicePrincipalId);
        writer.writeStringValue("servicePrincipalName", this.servicePrincipalName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the servicePrincipalId property value. Refers to the Unique GUID indicating Service Principal Id in Azure Active Directory for the corresponding App.
     * @returns a string
     */
    public get servicePrincipalId() {
        return this._servicePrincipalId;
    };
    /**
     * Sets the servicePrincipalId property value. Refers to the Unique GUID indicating Service Principal Id in Azure Active Directory for the corresponding App.
     * @param value Value to set for the servicePrincipalId property.
     */
    public set servicePrincipalId(value: string | undefined) {
        this._servicePrincipalId = value;
    };
    /**
     * Gets the servicePrincipalName property value. Refers to the Service Principal Name is the Application name in the tenant.
     * @returns a string
     */
    public get servicePrincipalName() {
        return this._servicePrincipalName;
    };
    /**
     * Sets the servicePrincipalName property value. Refers to the Service Principal Name is the Application name in the tenant.
     * @param value Value to set for the servicePrincipalName property.
     */
    public set servicePrincipalName(value: string | undefined) {
        this._servicePrincipalName = value;
    };
}
