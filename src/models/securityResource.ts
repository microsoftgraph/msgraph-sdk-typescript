import {SecurityResourceType} from './securityResourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecurityResource implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** Name of the resource that is related to current alert. Required.  */
    private _resource?: string | undefined;
    /** Represents type of security resources related to an alert. Possible values are: attacked, related.  */
    private _resourceType?: SecurityResourceType | undefined;
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
     * Instantiates a new securityResource and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "resource": (o, n) => { (o as unknown as SecurityResource).resource = n.getStringValue(); },
            "resourceType": (o, n) => { (o as unknown as SecurityResource).resourceType = n.getEnumValue<SecurityResourceType>(SecurityResourceType); },
        };
    };
    /**
     * Gets the resource property value. Name of the resource that is related to current alert. Required.
     * @returns a string
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. Name of the resource that is related to current alert. Required.
     * @param value Value to set for the resource property.
     */
    public set resource(value: string | undefined) {
        this._resource = value;
    };
    /**
     * Gets the resourceType property value. Represents type of security resources related to an alert. Possible values are: attacked, related.
     * @returns a securityResourceType
     */
    public get resourceType() {
        return this._resourceType;
    };
    /**
     * Sets the resourceType property value. Represents type of security resources related to an alert. Possible values are: attacked, related.
     * @param value Value to set for the resourceType property.
     */
    public set resourceType(value: SecurityResourceType | undefined) {
        this._resourceType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("resource", this.resource);
        writer.writeEnumValue<SecurityResourceType>("resourceType", this.resourceType);
        writer.writeAdditionalData(this.additionalData);
    };
}
