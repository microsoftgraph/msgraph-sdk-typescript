import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LoggedOnUser implements AdditionalDataHolder, Parsable {
    /** User account name of the logged-on user. */
    private _accountName?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** User account domain of the logged-on user. */
    private _domainName?: string | undefined;
    private _odataType?: string | undefined;
    /**
     * Gets the accountName property value. User account name of the logged-on user.
     * @returns a string
     */
    public get accountName() {
        return this._accountName;
    };
    /**
     * Sets the accountName property value. User account name of the logged-on user.
     * @param value Value to set for the accountName property.
     */
    public set accountName(value: string | undefined) {
        this._accountName = value;
    };
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
     * Instantiates a new loggedOnUser and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the domainName property value. User account domain of the logged-on user.
     * @returns a string
     */
    public get domainName() {
        return this._domainName;
    };
    /**
     * Sets the domainName property value. User account domain of the logged-on user.
     * @param value Value to set for the domainName property.
     */
    public set domainName(value: string | undefined) {
        this._domainName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accountName": n => { this.accountName = n.getStringValue(); },
            "domainName": n => { this.domainName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
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
        writer.writeStringValue("accountName", this.accountName);
        writer.writeStringValue("domainName", this.domainName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
