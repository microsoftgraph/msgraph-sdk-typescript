import {EntityImpl} from './index';
import {PrintServiceEndpoint} from './printServiceEndpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrintServiceEndpointImpl extends EntityImpl implements Parsable, PrintServiceEndpoint {
    /** A human-readable display name for the endpoint. */
    public displayName?: string | undefined;
    /** The URI that can be used to access the service. */
    public uri?: string | undefined;
    /**
     * Instantiates a new printServiceEndpoint and sets the default values.
     * @param printServiceEndpointParameterValue 
     */
    public constructor(printServiceEndpointParameterValue?: PrintServiceEndpoint | undefined) {
        super();
        this.displayName = printServiceEndpointParameterValue?.displayName ;
        this.uri = printServiceEndpointParameterValue?.uri ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
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
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.uri){
        writer.writeStringValue("uri", this.uri);
        }
    };
}
