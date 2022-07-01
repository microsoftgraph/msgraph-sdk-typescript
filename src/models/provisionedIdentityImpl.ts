import {createDetailsInfoFromDiscriminatorValue} from './createDetailsInfoFromDiscriminatorValue';
import {DetailsInfo} from './detailsInfo';
import {DetailsInfoImpl, IdentityImpl} from './index';
import {ProvisionedIdentity} from './provisionedIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class ProvisionedIdentityImpl extends IdentityImpl implements ProvisionedIdentity {
    /** Details of the identity. */
    private _details?: DetailsInfo | undefined;
    /** Type of identity that has been provisioned, such as 'user' or 'group'. */
    private _identityType?: string | undefined;
    /**
     * Instantiates a new provisionedIdentity and sets the default values.
     * @param provisionedIdentityParameterValue 
     */
    public constructor(provisionedIdentityParameterValue?: ProvisionedIdentity | undefined) {
        super(provisionedIdentityParameterValue);
        this._details = provisionedIdentityParameterValue?.details;
        this._identityType = provisionedIdentityParameterValue?.identityType;
    };
    /**
     * Gets the details property value. Details of the identity.
     * @returns a DetailsInfoInterface
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. Details of the identity.
     * @param value Value to set for the details property.
     */
    public set details(value: DetailsInfo | undefined) {
        if(value) {
            this._details = value instanceof DetailsInfoImpl? value as DetailsInfoImpl: new DetailsInfoImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "details": n => { this.details = n.getObjectValue<DetailsInfoImpl>(createDetailsInfoFromDiscriminatorValue); },
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
        if(value) {
            this._identityType = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.details){
            writer.writeObjectValue<DetailsInfoImpl>("details", (this.details instanceof DetailsInfoImpl? this.details as DetailsInfoImpl: new DetailsInfoImpl(this.details)));
        }
        if(this.identityType){
            writer.writeStringValue("identityType", this.identityType);
        }
    };
}
