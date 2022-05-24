import {AudioRoutingGroup} from './audioRoutingGroup';
import {EntityImpl} from './index';
import {RoutingMode} from './routingMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class AudioRoutingGroupImpl extends EntityImpl implements AudioRoutingGroup, Parsable {
    /** List of receiving participant ids. */
    public receivers?: string[] | undefined;
    /** Routing group mode.  Possible values are: oneToOne, multicast. */
    public routingMode?: RoutingMode | undefined;
    /** List of source participant ids. */
    public sources?: string[] | undefined;
    /**
     * Instantiates a new audioRoutingGroup and sets the default values.
     * @param audioRoutingGroupParameterValue 
     */
    public constructor(audioRoutingGroupParameterValue?: AudioRoutingGroup | undefined) {
        super();
        this.receivers = audioRoutingGroupParameterValue?.receivers ;
        this.routingMode = audioRoutingGroupParameterValue?.routingMode ;
        this.sources = audioRoutingGroupParameterValue?.sources ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "receivers": n => { this.receivers = n.getCollectionOfPrimitiveValues<string>(); },
            "routingMode": n => { this.routingMode = n.getEnumValue<RoutingMode>(RoutingMode); },
            "sources": n => { this.sources = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.receivers){
        writer.writeCollectionOfPrimitiveValues<string>("receivers", this.receivers);
        }
        if(this.routingMode){
        writer.writeEnumValue<RoutingMode>("routingMode", this.routingMode);
        }
        if(this.sources){
        writer.writeCollectionOfPrimitiveValues<string>("sources", this.sources);
        }
    };
}
