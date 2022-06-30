import {EntityImpl} from './index';
import {ManagedAppStatus} from './managedAppStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents app protection and configuration status for the organization. */
export class ManagedAppStatusImpl extends EntityImpl implements ManagedAppStatus {
    /** Friendly name of the status report. */
    private _displayName?: string | undefined;
    /** Version of the entity. */
    private _version?: string | undefined;
    /**
     * Instantiates a new managedAppStatus and sets the default values.
     * @param managedAppStatusParameterValue 
     */
    public constructor(managedAppStatusParameterValue?: ManagedAppStatus | undefined) {
        super(managedAppStatusParameterValue);
        this._displayName = managedAppStatusParameterValue?.displayName;
        this._version = managedAppStatusParameterValue?.version;
    };
    /**
     * Gets the displayName property value. Friendly name of the status report.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Friendly name of the status report.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
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
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.version){
            writer.writeStringValue("version", this.version);
        }
    };
    /**
     * Gets the version property value. Version of the entity.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Version of the entity.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        if(value) {
            this._version = value;
        }
    };
}
