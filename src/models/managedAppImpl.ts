import {MobileAppImpl} from './index';
import {ManagedApp} from './managedApp';
import {ManagedAppAvailability} from './managedAppAvailability';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppImpl extends MobileAppImpl implements ManagedApp {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Application's availability. Possible values are: global, lineOfBusiness. */
    public appAvailability?: ManagedAppAvailability | undefined;
    /** The Application's version. */
    public version?: string | undefined;
    /**
     * Instantiates a new ManagedApp and sets the default values.
     * @param managedAppParameterValue 
     */
    public constructor(managedAppParameterValue?: ManagedApp | undefined) {
        super(managedAppParameterValue);
        this.additionalData = managedAppParameterValue?.additionalData ? managedAppParameterValue?.additionalData! : {};
        this.appAvailability = managedAppParameterValue?.appAvailability;
        this.version = managedAppParameterValue?.version;
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
        writer.writeAdditionalData(this.additionalData);
    };
}
