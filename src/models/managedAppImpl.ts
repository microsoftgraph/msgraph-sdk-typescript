import {MobileAppImpl} from './index';
import {ManagedApp} from './managedApp';
import {ManagedAppAvailability} from './managedAppAvailability';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Abstract class that contains properties and inherited properties for apps that you can manage with an Intune app protection policy. */
export class ManagedAppImpl extends MobileAppImpl implements ManagedApp, Parsable {
    /** The Application's availability. Possible values are: global, lineOfBusiness. */
    public appAvailability?: ManagedAppAvailability | undefined;
    /** The Application's version. */
    public version?: string | undefined;
    /**
     * Instantiates a new managedApp and sets the default values.
     * @param managedAppParameterValue 
     */
    public constructor(managedAppParameterValue?: ManagedApp | undefined) {
        super();
        this.appAvailability = managedAppParameterValue?.appAvailability ;
        this.version = managedAppParameterValue?.version ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appAvailability": n => { this.appAvailability = n.getEnumValue<ManagedAppAvailability>(ManagedAppAvailability); },
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
        if(this.appAvailability){
        writer.writeEnumValue<ManagedAppAvailability>("appAvailability", this.appAvailability);
        }
        if(this.version){
        writer.writeStringValue("version", this.version);
        }
    };
}
