import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class PrintServiceEndpoint extends Entity implements Parsable {
    /** A human-readable display name for the endpoint. */
    private _displayName?: string | undefined;
    /** The URI that can be used to access the service. */
    private _uri?: string | undefined;
    /**
     * Instantiates a new printServiceEndpoint and sets the default values.
     */
    public constructor() {
        super();
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
        this._displayName = value;
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
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("uri", this.uri);
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
        this._uri = value;
    };
}
