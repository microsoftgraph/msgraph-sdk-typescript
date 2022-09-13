import {createDetailsInfoFromDiscriminatorValue} from './createDetailsInfoFromDiscriminatorValue';
import {DetailsInfo, Identity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisionedIdentity extends Identity implements Parsable {
    /** Details of the identity. */
    private _details?: DetailsInfo | undefined;
    /** Type of identity that has been provisioned, such as 'user' or 'group'. */
    private _identityType?: string | undefined;
    /**
     * Instantiates a new ProvisionedIdentity and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.provisionedIdentity";
    };
    /**
     * Gets the details property value. Details of the identity.
     * @returns a detailsInfo
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. Details of the identity.
     * @param value Value to set for the details property.
     */
    public set details(value: DetailsInfo | undefined) {
        this._details = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "details": n => { this.details = n.getObjectValue<DetailsInfo>(createDetailsInfoFromDiscriminatorValue); },
            "identityType": n => { this.identityType = n.getStringValue(); },
        };
    };
    /**
     * Gets the identityType property value. Type of identity that has been provisioned, such as 'user' or 'group'.
     * @returns a string
     */
    public get identityType() {
        return this._identityType;
    };
    /**
     * Sets the identityType property value. Type of identity that has been provisioned, such as 'user' or 'group'.
     * @param value Value to set for the identityType property.
     */
    public set identityType(value: string | undefined) {
        this._identityType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<DetailsInfo>("details", this.details);
        writer.writeStringValue("identityType", this.identityType);
    };
}
