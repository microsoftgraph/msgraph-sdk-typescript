import {AudioRoutingGroup} from './audioRoutingGroup';
import {EntityImpl} from './index';
import {RoutingMode} from './routingMode';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class AudioRoutingGroupImpl extends EntityImpl implements AudioRoutingGroup {
    /** List of receiving participant ids. */
    private _receivers?: string[] | undefined;
    /** Routing group mode.  Possible values are: oneToOne, multicast. */
    private _routingMode?: RoutingMode | undefined;
    /** List of source participant ids. */
    private _sources?: string[] | undefined;
    /**
     * Instantiates a new audioRoutingGroup and sets the default values.
     * @param audioRoutingGroupParameterValue 
     */
    public constructor(audioRoutingGroupParameterValue?: AudioRoutingGroup | undefined) {
        super(audioRoutingGroupParameterValue);
        this._receivers = audioRoutingGroupParameterValue?.receivers;
        this._routingMode = audioRoutingGroupParameterValue?.routingMode;
        this._sources = audioRoutingGroupParameterValue?.sources;
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
     * Gets the receivers property value. List of receiving participant ids.
     * @returns a string
     */
    public get receivers() {
        return this._receivers;
    };
    /**
     * Sets the receivers property value. List of receiving participant ids.
     * @param value Value to set for the receivers property.
     */
    public set receivers(value: string[] | undefined) {
        if(value) {
            this._receivers = value;
        }
    };
    /**
     * Gets the routingMode property value. Routing group mode.  Possible values are: oneToOne, multicast.
     * @returns a routingMode
     */
    public get routingMode() {
        return this._routingMode;
    };
    /**
     * Sets the routingMode property value. Routing group mode.  Possible values are: oneToOne, multicast.
     * @param value Value to set for the routingMode property.
     */
    public set routingMode(value: RoutingMode | undefined) {
        if(value) {
            this._routingMode = value;
        }
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
    /**
     * Gets the sources property value. List of source participant ids.
     * @returns a string
     */
    public get sources() {
        return this._sources;
    };
    /**
     * Sets the sources property value. List of source participant ids.
     * @param value Value to set for the sources property.
     */
    public set sources(value: string[] | undefined) {
        if(value) {
            this._sources = value;
        }
    };
}
