import {Entity} from './entity';
import {VolumeType} from './volumeType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BitlockerRecoveryKey extends Entity implements Parsable {
    /** The date and time when the key was originally backed up to Azure Active Directory.  */
    private _createdDateTime?: Date | undefined;
    /** ID of the device the BitLocker key is originally backed up from.  */
    private _deviceId?: string | undefined;
    /** The BitLocker recovery key.  */
    private _key?: string | undefined;
    /** Indicates the type of volume the BitLocker key is associated with. Possible values are: operatingSystemVolume, fixedDataVolume, removableDataVolume, unknownFutureValue.  */
    private _volumeType?: VolumeType | undefined;
    /**
     * Instantiates a new bitlockerRecoveryKey and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The date and time when the key was originally backed up to Azure Active Directory.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the deviceId property value. ID of the device the BitLocker key is originally backed up from.
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Gets the key property value. The BitLocker recovery key.
     * @returns a string
     */
    public get key() {
        return this._key;
    };
    /**
     * Gets the volumeType property value. Indicates the type of volume the BitLocker key is associated with. Possible values are: operatingSystemVolume, fixedDataVolume, removableDataVolume, unknownFutureValue.
     * @returns a volumeType
     */
    public get volumeType() {
        return this._volumeType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["createdDateTime", (o, n) => { (o as unknown as BitlockerRecoveryKey).createdDateTime = n.getDateValue(); }],
            ["deviceId", (o, n) => { (o as unknown as BitlockerRecoveryKey).deviceId = n.getStringValue(); }],
            ["key", (o, n) => { (o as unknown as BitlockerRecoveryKey).key = n.getStringValue(); }],
            ["volumeType", (o, n) => { (o as unknown as BitlockerRecoveryKey).volumeType = n.getEnumValue<VolumeType>(VolumeType); }],
        ]);
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
     * Sets the createdDateTime property value. The date and time when the key was originally backed up to Azure Active Directory.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the deviceId property value. ID of the device the BitLocker key is originally backed up from.
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        this._deviceId = value;
    };
    /**
     * Sets the key property value. The BitLocker recovery key.
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
    };
    /**
     * Sets the volumeType property value. Indicates the type of volume the BitLocker key is associated with. Possible values are: operatingSystemVolume, fixedDataVolume, removableDataVolume, unknownFutureValue.
     * @param value Value to set for the volumeType property.
     */
    public set volumeType(value: VolumeType | undefined) {
        this._volumeType = value;
    };
}
