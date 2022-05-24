import {Endpoint} from './endpoint';
import {DirectoryObjectImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the instantiate method. */
export class EndpointImpl extends DirectoryObjectImpl implements Endpoint, Parsable {
    /** Describes the capability that is associated with this resource. (e.g. Messages, Conversations, etc.) Not nullable. Read-only. */
    public capability?: string | undefined;
    /** Application id of the publishing underlying service. Not nullable. Read-only. */
    public providerId?: string | undefined;
    /** Name of the publishing underlying service. Read-only. */
    public providerName?: string | undefined;
    /** For Microsoft 365 groups, this is set to a well-known name for the resource (e.g. Yammer.FeedURL etc.). Not nullable. Read-only. */
    public providerResourceId?: string | undefined;
    /** URL of the published resource. Not nullable. Read-only. */
    public uri?: string | undefined;
    /**
     * Instantiates a new endpoint and sets the default values.
     * @param endpointParameterValue 
     */
    public constructor(endpointParameterValue?: Endpoint | undefined) {
        super();
        this.capability = endpointParameterValue?.capability ;
        this.providerId = endpointParameterValue?.providerId ;
        this.providerName = endpointParameterValue?.providerName ;
        this.providerResourceId = endpointParameterValue?.providerResourceId ;
        this.uri = endpointParameterValue?.uri ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "capability": n => { this.capability = n.getStringValue(); },
            "providerId": n => { this.providerId = n.getStringValue(); },
            "providerName": n => { this.providerName = n.getStringValue(); },
            "providerResourceId": n => { this.providerResourceId = n.getStringValue(); },
            "uri": n => { this.uri = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.capability){
        writer.writeStringValue("capability", this.capability);
        }
        if(this.providerId){
        writer.writeStringValue("providerId", this.providerId);
        }
        if(this.providerName){
        writer.writeStringValue("providerName", this.providerName);
        }
        if(this.providerResourceId){
        writer.writeStringValue("providerResourceId", this.providerResourceId);
        }
        if(this.uri){
        writer.writeStringValue("uri", this.uri);
        }
    };
}
