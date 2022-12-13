import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the dismiss method.
 */
export class DismissPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The servicePrincipalIds property */
    private _servicePrincipalIds?: string[] | undefined;
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
     * Instantiates a new dismissPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "servicePrincipalIds": n => { this.servicePrincipalIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("servicePrincipalIds", this.servicePrincipalIds);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the servicePrincipalIds property value. The servicePrincipalIds property
     * @returns a string
     */
    public get servicePrincipalIds() {
        return this._servicePrincipalIds;
    };
    /**
     * Sets the servicePrincipalIds property value. The servicePrincipalIds property
     * @param value Value to set for the servicePrincipalIds property.
     */
    public set servicePrincipalIds(value: string[] | undefined) {
        this._servicePrincipalIds = value;
    };
}
