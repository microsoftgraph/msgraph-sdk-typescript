import {AssignedLicense} from './assignedLicense';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignedLicenseImpl implements AdditionalDataHolder, AssignedLicense, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A collection of the unique identifiers for plans that have been disabled. */
    public disabledPlans?: string[] | undefined;
    /** The unique identifier for the SKU. */
    public skuId?: string | undefined;
    /**
     * Instantiates a new assignedLicense and sets the default values.
     * @param assignedLicenseParameterValue 
     */
    public constructor(assignedLicenseParameterValue?: AssignedLicense | undefined) {
        this.additionalData = assignedLicenseParameterValue?.additionalData ? assignedLicenseParameterValue?.additionalData! : {}
        this.disabledPlans = assignedLicenseParameterValue?.disabledPlans ;
        this.skuId = assignedLicenseParameterValue?.skuId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "disabledPlans": n => { this.disabledPlans = n.getCollectionOfPrimitiveValues<string>(); },
            "skuId": n => { this.skuId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.disabledPlans){
        writer.writeCollectionOfPrimitiveValues<string>("disabledPlans", this.disabledPlans);
        }
        if(this.skuId){
        writer.writeStringValue("skuId", this.skuId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
