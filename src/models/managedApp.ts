import {MobileApp} from './index';
import {ManagedAppAvailability} from './managedAppAvailability';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Abstract class that contains properties and inherited properties for apps that you can manage with an Intune app protection policy. */
export class ManagedApp extends MobileApp implements Parsable {
    /** The Application's availability. Possible values are: global, lineOfBusiness. */
    private _appAvailability?: ManagedAppAvailability | undefined;
    /** The Application's version. */
    private _version?: string | undefined;
    /**
     * Gets the appAvailability property value. The Application's availability. Possible values are: global, lineOfBusiness.
     * @returns a managedAppAvailability
     */
    public get appAvailability() {
        return this._appAvailability;
    };
    /**
     * Sets the appAvailability property value. The Application's availability. Possible values are: global, lineOfBusiness.
     * @param value Value to set for the appAvailability property.
     */
    public set appAvailability(value: ManagedAppAvailability | undefined) {
        this._appAvailability = value;
    };
    /**
     * Instantiates a new managedApp and sets the default values.
     */
    public constructor() {
        super();
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
        writer.writeEnumValue<ManagedAppAvailability>("appAvailability", this.appAvailability);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Gets the version property value. The Application's version.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. The Application's version.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
