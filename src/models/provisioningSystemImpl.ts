import {createDetailsInfoFromDiscriminatorValue} from './createDetailsInfoFromDiscriminatorValue';
import {DetailsInfo} from './detailsInfo';
import {DetailsInfoImpl, IdentityImpl} from './index';
import {ProvisioningSystem} from './provisioningSystem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class ProvisioningSystemImpl extends IdentityImpl implements ProvisioningSystem {
    /** Details of the system. */
    private _details?: DetailsInfo | undefined;
    /**
     * Instantiates a new provisioningSystem and sets the default values.
     * @param provisioningSystemParameterValue 
     */
    public constructor(provisioningSystemParameterValue?: ProvisioningSystem | undefined) {
        super(provisioningSystemParameterValue);
        this._details = provisioningSystemParameterValue?.details;
    };
    /**
     * Gets the details property value. Details of the system.
     * @returns a DetailsInfoInterface
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. Details of the system.
     * @param value Value to set for the details property.
     */
    public set details(value: DetailsInfo | undefined) {
        if(value) {
            this._details = value instanceof DetailsInfoImpl? value : new DetailsInfoImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "details": n => { this.details = n.getObjectValue<DetailsInfoImpl>(createDetailsInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.details){
            writer.writeObjectValue<DetailsInfoImpl>("details", (!this.details || this.details instanceof DetailsInfoImpl? this.details : new DetailsInfoImpl(this.details)));
        }
    };
}
