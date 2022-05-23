import {BitlockerRecoveryKey} from './bitlockerRecoveryKey';
import {EntityImpl} from './index';
import {VolumeType} from './volumeType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the informationProtection singleton. */
export class BitlockerRecoveryKeyImpl extends EntityImpl implements BitlockerRecoveryKey, Parsable {
    /** The date and time when the key was originally backed up to Azure Active Directory. */
    public createdDateTime?: Date | undefined;
    /** ID of the device the BitLocker key is originally backed up from. */
    public deviceId?: string | undefined;
    /** The BitLocker recovery key. */
    public key?: string | undefined;
    /** Indicates the type of volume the BitLocker key is associated with. Possible values are: operatingSystemVolume, fixedDataVolume, removableDataVolume, unknownFutureValue. */
    public volumeType?: VolumeType | undefined;
    /**
     * Instantiates a new bitlockerRecoveryKey and sets the default values.
     * @param bitlockerRecoveryKeyParameterValue 
     */
    public constructor(bitlockerRecoveryKeyParameterValue?: BitlockerRecoveryKey | undefined) {
        super();
        this.createdDateTime = bitlockerRecoveryKeyParameterValue?.createdDateTime ;
        this.deviceId = bitlockerRecoveryKeyParameterValue?.deviceId ;
        this.key = bitlockerRecoveryKeyParameterValue?.key ;
        this.volumeType = bitlockerRecoveryKeyParameterValue?.volumeType ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.deviceId){
        writer.writeStringValue("deviceId", this.deviceId);
        }
        if(this.key){
        writer.writeStringValue("key", this.key);
        }
        if(this.volumeType){
        writer.writeEnumValue<VolumeType>("volumeType", this.volumeType);
        }
    };
}
