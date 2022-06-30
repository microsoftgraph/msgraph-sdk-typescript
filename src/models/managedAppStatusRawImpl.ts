import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {JsonImpl, ManagedAppStatusImpl} from './index';
import {Json} from './json';
import {ManagedAppStatusRaw} from './managedAppStatusRaw';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppStatusRawImpl extends ManagedAppStatusImpl implements ManagedAppStatusRaw {
    /** Status report content. */
    private _content?: Json | undefined;
    /**
     * Instantiates a new ManagedAppStatusRaw and sets the default values.
     * @param managedAppStatusRawParameterValue 
     */
    public constructor(managedAppStatusRawParameterValue?: ManagedAppStatusRaw | undefined) {
        super(managedAppStatusRawParameterValue);
        this._content = managedAppStatusRawParameterValue?.content;
    };
    /**
     * Gets the content property value. Status report content.
     * @returns a JsonInterface
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. Status report content.
     * @param value Value to set for the content property.
     */
    public set content(value: Json | undefined) {
        if(value) {
            this._content = value instanceof JsonImpl? value : new JsonImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "content": n => { this.content = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.content){
            writer.writeObjectValue<JsonImpl>("content", (!this.content || this.content instanceof JsonImpl? this.content : new JsonImpl(this.content)));
        }
    };
}
