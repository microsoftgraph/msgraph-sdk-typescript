import {createStoragePlanInformationFromDiscriminatorValue} from './createStoragePlanInformationFromDiscriminatorValue';
import {StoragePlanInformationImpl} from './index';
import {Quota} from './quota';
import {StoragePlanInformation} from './storagePlanInformation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class QuotaImpl implements AdditionalDataHolder, Parsable, Quota {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Total space consumed by files in the recycle bin, in bytes. Read-only. */
    public deleted?: number | undefined;
    /** Total space remaining before reaching the quota limit, in bytes. Read-only. */
    public remaining?: number | undefined;
    /** Enumeration value that indicates the state of the storage space. Read-only. */
    public state?: string | undefined;
    /** Information about the drive's storage quota plans. Only in Personal OneDrive. */
    public storagePlanInformation?: StoragePlanInformation | undefined;
    /** Total allowed storage space, in bytes. Read-only. */
    public total?: number | undefined;
    /** Total space used, in bytes. Read-only. */
    public used?: number | undefined;
    /**
     * Instantiates a new quota and sets the default values.
     * @param quotaParameterValue 
     */
    public constructor(quotaParameterValue?: Quota | undefined) {
        this.additionalData = quotaParameterValue?.additionalData ? quotaParameterValue?.additionalData! : {}
        this.deleted = quotaParameterValue?.deleted ;
        this.remaining = quotaParameterValue?.remaining ;
        this.state = quotaParameterValue?.state ;
        this.storagePlanInformation = quotaParameterValue?.storagePlanInformation ;
        this.total = quotaParameterValue?.total ;
        this.used = quotaParameterValue?.used ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deleted": n => { this.deleted = n.getNumberValue(); },
            "remaining": n => { this.remaining = n.getNumberValue(); },
            "state": n => { this.state = n.getStringValue(); },
            "storagePlanInformation": n => { this.storagePlanInformation = n.getObjectValue<StoragePlanInformationImpl>(createStoragePlanInformationFromDiscriminatorValue); },
            "total": n => { this.total = n.getNumberValue(); },
            "used": n => { this.used = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.deleted){
        writer.writeNumberValue("deleted", this.deleted);
        }
        if(this.remaining){
        writer.writeNumberValue("remaining", this.remaining);
        }
        if(this.state){
        writer.writeStringValue("state", this.state);
        }
        if(this.storagePlanInformation){
        writer.writeObjectValue<StoragePlanInformationImpl>("storagePlanInformation", new StoragePlanInformationImpl(this.storagePlanInformation));
        }
        if(this.total){
        writer.writeNumberValue("total", this.total);
        }
        if(this.used){
        writer.writeNumberValue("used", this.used);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
