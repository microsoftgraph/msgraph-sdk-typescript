import {Entity} from './index';
import {VolumeType} from './volumeType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BitlockerRecoveryKey extends Entity implements Parsable {
    /** The date and time when the key was originally backed up to Azure Active Directory. Not nullable. */
    private _createdDateTime?: Date | undefined;
    /** Identifier of the device the BitLocker key is originally backed up from. Supports $filter (eq). */
    private _deviceId?: string | undefined;
    /** The BitLocker recovery key. Returned only on $select. Not nullable. */
    private _key?: string | undefined;
    /** Indicates the type of volume the BitLocker key is associated with. The possible values are: 1 (for operatingSystemVolume), 2 (for fixedDataVolume), 3 (for removableDataVolume), and 4 (for unknownFutureValue). */
    private _volumeType?: VolumeType | undefined;
    /**
     * Instantiates a new bitlockerRecoveryKey and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The date and time when the key was originally backed up to Azure Active Directory. Not nullable.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time when the key was originally backed up to Azure Active Directory. Not nullable.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the deviceId property value. Identifier of the device the BitLocker key is originally backed up from. Supports $filter (eq).
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Sets the deviceId property value. Identifier of the device the BitLocker key is originally backed up from. Supports $filter (eq).
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        this._deviceId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "deviceId": n => { this.deviceId = n.getStringValue(); },
            "key": n => { this.key = n.getStringValue(); },
            "volumeType": n => { this.volumeType = n.getEnumValue<VolumeType>(VolumeType); },
        };
    };
    /**
     * Gets the key property value. The BitLocker recovery key. Returned only on $select. Not nullable.
     * @returns a string
     */
    public get key() {
        return this._key;
    };
    /**
     * Sets the key property value. The BitLocker recovery key. Returned only on $select. Not nullable.
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("deviceId", this.deviceId);
        writer.writeStringValue("key", this.key);
        writer.writeEnumValue<VolumeType>("volumeType", this.volumeType);
    };
    /**
     * Gets the volumeType property value. Indicates the type of volume the BitLocker key is associated with. The possible values are: 1 (for operatingSystemVolume), 2 (for fixedDataVolume), 3 (for removableDataVolume), and 4 (for unknownFutureValue).
     * @returns a volumeType
     */
    public get volumeType() {
        return this._volumeType;
    };
    /**
     * Sets the volumeType property value. Indicates the type of volume the BitLocker key is associated with. The possible values are: 1 (for operatingSystemVolume), 2 (for fixedDataVolume), 3 (for removableDataVolume), and 4 (for unknownFutureValue).
     * @param value Value to set for the volumeType property.
     */
    public set volumeType(value: VolumeType | undefined) {
        this._volumeType = value;
    };
}
