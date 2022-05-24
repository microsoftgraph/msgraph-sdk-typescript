import {OnPremisesProvisioningError} from './onPremisesProvisioningError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnPremisesProvisioningErrorImpl implements AdditionalDataHolder, OnPremisesProvisioningError, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Category of the provisioning error. Note: Currently, there is only one possible value. Possible value: PropertyConflict - indicates a property value is not unique. Other objects contain the same value for the property. */
    public category?: string | undefined;
    /** The date and time at which the error occurred. */
    public occurredDateTime?: Date | undefined;
    /** Name of the directory property causing the error. Current possible values: UserPrincipalName or ProxyAddress */
    public propertyCausingError?: string | undefined;
    /** Value of the property causing the error. */
    public value?: string | undefined;
    /**
     * Instantiates a new onPremisesProvisioningError and sets the default values.
     * @param onPremisesProvisioningErrorParameterValue 
     */
    public constructor(onPremisesProvisioningErrorParameterValue?: OnPremisesProvisioningError | undefined) {
        this.additionalData = onPremisesProvisioningErrorParameterValue?.additionalData ? onPremisesProvisioningErrorParameterValue?.additionalData! : {}
        this.category = onPremisesProvisioningErrorParameterValue?.category ;
        this.occurredDateTime = onPremisesProvisioningErrorParameterValue?.occurredDateTime ;
        this.propertyCausingError = onPremisesProvisioningErrorParameterValue?.propertyCausingError ;
        this.value = onPremisesProvisioningErrorParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "category": n => { this.category = n.getStringValue(); },
            "occurredDateTime": n => { this.occurredDateTime = n.getDateValue(); },
            "propertyCausingError": n => { this.propertyCausingError = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.category){
        writer.writeStringValue("category", this.category);
        }
        if(this.occurredDateTime){
        writer.writeDateValue("occurredDateTime", this.occurredDateTime);
        }
        if(this.propertyCausingError){
        writer.writeStringValue("propertyCausingError", this.propertyCausingError);
        }
        if(this.value){
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
