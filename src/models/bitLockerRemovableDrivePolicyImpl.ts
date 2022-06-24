import {BitLockerEncryptionMethod} from './bitLockerEncryptionMethod';
import {BitLockerRemovableDrivePolicy} from './bitLockerRemovableDrivePolicy';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** BitLocker Removable Drive Policies. */
export class BitLockerRemovableDrivePolicyImpl implements BitLockerRemovableDrivePolicy {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** This policy setting determines whether BitLocker protection is required for removable data drives to be writable on a computer. */
    public blockCrossOrganizationWriteAccess?: boolean | undefined;
    /** Select the encryption method for removable  drives. Possible values are: aesCbc128, aesCbc256, xtsAes128, xtsAes256. */
    public encryptionMethod?: BitLockerEncryptionMethod | undefined;
    /** Indicates whether to block write access to devices configured in another organization.  If requireEncryptionForWriteAccess is false, this value does not affect. */
    public requireEncryptionForWriteAccess?: boolean | undefined;
    /**
     * Instantiates a new bitLockerRemovableDrivePolicy and sets the default values.
     * @param bitLockerRemovableDrivePolicyParameterValue 
     */
    public constructor(bitLockerRemovableDrivePolicyParameterValue?: BitLockerRemovableDrivePolicy | undefined) {
        this.additionalData = bitLockerRemovableDrivePolicyParameterValue?.additionalData ? bitLockerRemovableDrivePolicyParameterValue?.additionalData! : {};
        this.blockCrossOrganizationWriteAccess = bitLockerRemovableDrivePolicyParameterValue?.blockCrossOrganizationWriteAccess;
        this.encryptionMethod = bitLockerRemovableDrivePolicyParameterValue?.encryptionMethod;
        this.requireEncryptionForWriteAccess = bitLockerRemovableDrivePolicyParameterValue?.requireEncryptionForWriteAccess;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "blockCrossOrganizationWriteAccess": n => { this.blockCrossOrganizationWriteAccess = n.getBooleanValue(); },
            "encryptionMethod": n => { this.encryptionMethod = n.getEnumValue<BitLockerEncryptionMethod>(BitLockerEncryptionMethod); },
            "requireEncryptionForWriteAccess": n => { this.requireEncryptionForWriteAccess = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.blockCrossOrganizationWriteAccess){
            writer.writeBooleanValue("blockCrossOrganizationWriteAccess", this.blockCrossOrganizationWriteAccess);
        }
        if(this.encryptionMethod){
            writer.writeEnumValue<BitLockerEncryptionMethod>("encryptionMethod", this.encryptionMethod);
        }
        if(this.requireEncryptionForWriteAccess){
            writer.writeBooleanValue("requireEncryptionForWriteAccess", this.requireEncryptionForWriteAccess);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
