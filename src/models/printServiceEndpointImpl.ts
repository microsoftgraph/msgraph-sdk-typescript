import {EntityImpl} from './index';
import {PrintServiceEndpoint} from './printServiceEndpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrintServiceEndpointImpl extends EntityImpl implements PrintServiceEndpoint {
    /** A human-readable display name for the endpoint. */
    private _displayName?: string | undefined;
    /** The URI that can be used to access the service. */
    private _uri?: string | undefined;
    /**
     * Instantiates a new printServiceEndpoint and sets the default values.
     * @param printServiceEndpointParameterValue 
     */
    public constructor(printServiceEndpointParameterValue?: PrintServiceEndpoint | undefined) {
        super(printServiceEndpointParameterValue);
        this._displayName = printServiceEndpointParameterValue?.displayName;
        this._uri = printServiceEndpointParameterValue?.uri;
    };
    /**
     * Gets the displayName property value. A human-readable display name for the endpoint.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. A human-readable display name for the endpoint.
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
    /**
     * Gets the uri property value. The URI that can be used to access the service.
     * @returns a string
     */
    public get uri() {
        return this._uri;
    };
    /**
     * Sets the uri property value. The URI that can be used to access the service.
     * @param value Value to set for the uri property.
     */
    public set uri(value: string | undefined) {
        if(value) {
            this._uri = value;
        }
    };
}
