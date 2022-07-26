import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {Json, ManagedAppStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppStatusRaw extends ManagedAppStatus implements Parsable {
    /** Status report content. */
    private _content?: Json | undefined;
    /**
     * Instantiates a new ManagedAppStatusRaw and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.managedAppStatusRaw";
    };
    /**
     * Gets the content property value. Status report content.
     * @returns a Json
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. Status report content.
     * @param value Value to set for the content property.
     */
    public set content(value: Json | undefined) {
        this._content = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "content": n => { this.content = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Json>("content", this.content);
    };
}
