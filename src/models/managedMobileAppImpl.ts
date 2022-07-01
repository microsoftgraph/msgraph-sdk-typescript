import {createMobileAppIdentifierFromDiscriminatorValue} from './createMobileAppIdentifierFromDiscriminatorValue';
import {EntityImpl, MobileAppIdentifierImpl} from './index';
import {ManagedMobileApp} from './managedMobileApp';
import {MobileAppIdentifier} from './mobileAppIdentifier';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The identifier for the deployment an app. */
export class ManagedMobileAppImpl extends EntityImpl implements ManagedMobileApp {
    /** The identifier for an app with it's operating system type. */
    private _mobileAppIdentifier?: MobileAppIdentifier | undefined;
    /** Version of the entity. */
    private _version?: string | undefined;
    /**
     * Instantiates a new managedMobileApp and sets the default values.
     * @param managedMobileAppParameterValue 
     */
    public constructor(managedMobileAppParameterValue?: ManagedMobileApp | undefined) {
        super(managedMobileAppParameterValue);
        this._mobileAppIdentifier = managedMobileAppParameterValue?.mobileAppIdentifier;
        this._version = managedMobileAppParameterValue?.version;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "mobileAppIdentifier": n => { this.mobileAppIdentifier = n.getObjectValue<MobileAppIdentifierImpl>(createMobileAppIdentifierFromDiscriminatorValue); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Gets the mobileAppIdentifier property value. The identifier for an app with it's operating system type.
     * @returns a MobileAppIdentifierInterface
     */
    public get mobileAppIdentifier() {
        return this._mobileAppIdentifier;
    };
    /**
     * Sets the mobileAppIdentifier property value. The identifier for an app with it's operating system type.
     * @param value Value to set for the mobileAppIdentifier property.
     */
    public set mobileAppIdentifier(value: MobileAppIdentifier | undefined) {
        if(value) {
            this._mobileAppIdentifier = value instanceof MobileAppIdentifierImpl? value as MobileAppIdentifierImpl: new MobileAppIdentifierImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.mobileAppIdentifier){
            writer.writeObjectValue<MobileAppIdentifierImpl>("mobileAppIdentifier", (this.mobileAppIdentifier instanceof MobileAppIdentifierImpl? this.mobileAppIdentifier as MobileAppIdentifierImpl: new MobileAppIdentifierImpl(this.mobileAppIdentifier)));
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
