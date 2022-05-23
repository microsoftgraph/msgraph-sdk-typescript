import {createManagedDeviceFromDiscriminatorValue} from './createManagedDeviceFromDiscriminatorValue';
import {DetectedApp} from './detectedApp';
import {EntityImpl, ManagedDeviceImpl} from './index';
import {ManagedDevice} from './managedDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A managed or unmanaged app that is installed on a managed device. Unmanaged apps will only appear for devices marked as corporate owned. */
export class DetectedAppImpl extends EntityImpl implements DetectedApp, Parsable {
    /** The number of devices that have installed this application */
    public deviceCount?: number | undefined;
    /** Name of the discovered application. Read-only */
    public displayName?: string | undefined;
    /** The devices that have the discovered application installed */
    public managedDevices?: ManagedDevice[] | undefined;
    /** Discovered application size in bytes. Read-only */
    public sizeInByte?: number | undefined;
    /** Version of the discovered application. Read-only */
    public version?: string | undefined;
    /**
     * Instantiates a new detectedApp and sets the default values.
     * @param detectedAppParameterValue 
     */
    public constructor(detectedAppParameterValue?: DetectedApp | undefined) {
        super();
        this.deviceCount = detectedAppParameterValue?.deviceCount ;
        this.displayName = detectedAppParameterValue?.displayName ;
        this.managedDevices = detectedAppParameterValue?.managedDevices ;
        this.sizeInByte = detectedAppParameterValue?.sizeInByte ;
        this.version = detectedAppParameterValue?.version ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceCount": n => { this.deviceCount = n.getNumberValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "managedDevices": n => { this.managedDevices = n.getCollectionOfObjectValues<ManagedDeviceImpl>(createManagedDeviceFromDiscriminatorValue); },
            "sizeInByte": n => { this.sizeInByte = n.getNumberValue(); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.deviceCount){
        writer.writeNumberValue("deviceCount", this.deviceCount);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.managedDevices && this.managedDevices.length != 0){        const managedDevicesArrValue: ManagedDeviceImpl[] = []; this.managedDevices?.forEach(element => {managedDevicesArrValue.push(new ManagedDeviceImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedDeviceImpl>("managedDevices", managedDevicesArrValue);
        }
        if(this.sizeInByte){
        writer.writeNumberValue("sizeInByte", this.sizeInByte);
        }
        if(this.version){
        writer.writeStringValue("version", this.version);
        }
    };
}
