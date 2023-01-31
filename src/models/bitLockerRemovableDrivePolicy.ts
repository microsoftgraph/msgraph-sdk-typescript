import {BitLockerEncryptionMethod} from './bitLockerEncryptionMethod';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * BitLocker Removable Drive Policies.
 */
export class BitLockerRemovableDrivePolicy implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** This policy setting determines whether BitLocker protection is required for removable data drives to be writable on a computer. */
    private _blockCrossOrganizationWriteAccess?: boolean | undefined;
    /** Select the encryption method for removable  drives. Possible values are: aesCbc128, aesCbc256, xtsAes128, xtsAes256. */
    private _encryptionMethod?: BitLockerEncryptionMethod | undefined;
    private _odataType?: string | undefined;
    /** Indicates whether to block write access to devices configured in another organization.  If requireEncryptionForWriteAccess is false, this value does not affect. */
    private _requireEncryptionForWriteAccess?: boolean | undefined;
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
     * Gets the blockCrossOrganizationWriteAccess property value. This policy setting determines whether BitLocker protection is required for removable data drives to be writable on a computer.
     * @returns a boolean
     */
    public get blockCrossOrganizationWriteAccess() {
        return this._blockCrossOrganizationWriteAccess;
    };
    /**
     * Sets the blockCrossOrganizationWriteAccess property value. This policy setting determines whether BitLocker protection is required for removable data drives to be writable on a computer.
     * @param value Value to set for the blockCrossOrganizationWriteAccess property.
     */
    public set blockCrossOrganizationWriteAccess(value: boolean | undefined) {
        this._blockCrossOrganizationWriteAccess = value;
    };
    /**
     * Instantiates a new bitLockerRemovableDrivePolicy and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the encryptionMethod property value. Select the encryption method for removable  drives. Possible values are: aesCbc128, aesCbc256, xtsAes128, xtsAes256.
     * @returns a bitLockerEncryptionMethod
     */
    public get encryptionMethod() {
        return this._encryptionMethod;
    };
    /**
     * Sets the encryptionMethod property value. Select the encryption method for removable  drives. Possible values are: aesCbc128, aesCbc256, xtsAes128, xtsAes256.
     * @param value Value to set for the encryptionMethod property.
     */
    public set encryptionMethod(value: BitLockerEncryptionMethod | undefined) {
        this._encryptionMethod = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "blockCrossOrganizationWriteAccess": n => { this.blockCrossOrganizationWriteAccess = n.getBooleanValue(); },
            "encryptionMethod": n => { this.encryptionMethod = n.getEnumValue<BitLockerEncryptionMethod>(BitLockerEncryptionMethod); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "requireEncryptionForWriteAccess": n => { this.requireEncryptionForWriteAccess = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the requireEncryptionForWriteAccess property value. Indicates whether to block write access to devices configured in another organization.  If requireEncryptionForWriteAccess is false, this value does not affect.
     * @returns a boolean
     */
    public get requireEncryptionForWriteAccess() {
        return this._requireEncryptionForWriteAccess;
    };
    /**
     * Sets the requireEncryptionForWriteAccess property value. Indicates whether to block write access to devices configured in another organization.  If requireEncryptionForWriteAccess is false, this value does not affect.
     * @param value Value to set for the requireEncryptionForWriteAccess property.
     */
    public set requireEncryptionForWriteAccess(value: boolean | undefined) {
        this._requireEncryptionForWriteAccess = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("blockCrossOrganizationWriteAccess", this.blockCrossOrganizationWriteAccess);
        writer.writeEnumValue<BitLockerEncryptionMethod>("encryptionMethod", this.encryptionMethod);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("requireEncryptionForWriteAccess", this.requireEncryptionForWriteAccess);
        writer.writeAdditionalData(this.additionalData);
    };
}
