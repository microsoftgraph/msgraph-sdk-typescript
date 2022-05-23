import {createMobileAppIdentifierFromDiscriminatorValue} from './createMobileAppIdentifierFromDiscriminatorValue';
import {EntityImpl, MobileAppIdentifierImpl} from './index';
import {ManagedMobileApp} from './managedMobileApp';
import {MobileAppIdentifier} from './mobileAppIdentifier';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The identifier for the deployment an app. */
export class ManagedMobileAppImpl extends EntityImpl implements ManagedMobileApp, Parsable {
    /** The identifier for an app with it's operating system type. */
    public mobileAppIdentifier?: MobileAppIdentifier | undefined;
    /** Version of the entity. */
    public version?: string | undefined;
    /**
     * Instantiates a new managedMobileApp and sets the default values.
     * @param managedMobileAppParameterValue 
     */
    public constructor(managedMobileAppParameterValue?: ManagedMobileApp | undefined) {
        super();
        this.mobileAppIdentifier = managedMobileAppParameterValue?.mobileAppIdentifier ;
        this.version = managedMobileAppParameterValue?.version ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.mobileAppIdentifier){
        writer.writeObjectValue<MobileAppIdentifierImpl>("mobileAppIdentifier", new MobileAppIdentifierImpl(this.mobileAppIdentifier));
        }
        if(this.version){
        writer.writeStringValue("version", this.version);
        }
    };
}
