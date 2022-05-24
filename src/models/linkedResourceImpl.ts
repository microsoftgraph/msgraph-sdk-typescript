import {EntityImpl} from './index';
import {LinkedResource} from './linkedResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class LinkedResourceImpl extends EntityImpl implements LinkedResource, Parsable {
    /** Field indicating the app name of the source that is sending the linkedResource. */
    public applicationName?: string | undefined;
    /** Field indicating the title of the linkedResource. */
    public displayName?: string | undefined;
    /** Id of the object that is associated with this task on the third-party/partner system. */
    public externalId?: string | undefined;
    /** Deep link to the linkedResource. */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new linkedResource and sets the default values.
     * @param linkedResourceParameterValue 
     */
    public constructor(linkedResourceParameterValue?: LinkedResource | undefined) {
        super();
        this.applicationName = linkedResourceParameterValue?.applicationName ;
        this.displayName = linkedResourceParameterValue?.displayName ;
        this.externalId = linkedResourceParameterValue?.externalId ;
        this.webUrl = linkedResourceParameterValue?.webUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicationName": n => { this.applicationName = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.applicationName){
        writer.writeStringValue("applicationName", this.applicationName);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.externalId){
        writer.writeStringValue("externalId", this.externalId);
        }
        if(this.webUrl){
        writer.writeStringValue("webUrl", this.webUrl);
        }
    };
}
