import {StoragePlanInformation} from './storagePlanInformation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StoragePlanInformationImpl implements AdditionalDataHolder, Parsable, StoragePlanInformation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates if there are higher storage quota plans available. Read-only. */
    public upgradeAvailable?: boolean | undefined;
    /**
     * Instantiates a new storagePlanInformation and sets the default values.
     * @param storagePlanInformationParameterValue 
     */
    public constructor(storagePlanInformationParameterValue?: StoragePlanInformation | undefined) {
        this.additionalData = storagePlanInformationParameterValue?.additionalData ? storagePlanInformationParameterValue?.additionalData! : {}
        this.upgradeAvailable = storagePlanInformationParameterValue?.upgradeAvailable ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "upgradeAvailable": n => { this.upgradeAvailable = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.upgradeAvailable){
        writer.writeBooleanValue("upgradeAvailable", this.upgradeAvailable);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
