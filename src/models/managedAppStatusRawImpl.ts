import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {JsonImpl, ManagedAppStatusImpl} from './index';
import {Json} from './json';
import {ManagedAppStatusRaw} from './managedAppStatusRaw';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppStatusRawImpl extends ManagedAppStatusImpl implements ManagedAppStatusRaw {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Status report content. */
    public content?: Json | undefined;
    /**
     * Instantiates a new ManagedAppStatusRaw and sets the default values.
     * @param managedAppStatusRawParameterValue 
     */
    public constructor(managedAppStatusRawParameterValue?: ManagedAppStatusRaw | undefined) {
        super(managedAppStatusRawParameterValue);
        this.additionalData = managedAppStatusRawParameterValue?.additionalData ? managedAppStatusRawParameterValue?.additionalData! : {};
        this.content = managedAppStatusRawParameterValue?.content instanceof JsonImpl? managedAppStatusRawParameterValue?.content:new JsonImpl(managedAppStatusRawParameterValue?.content);
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
            writer.writeObjectValue<JsonImpl>("content", new JsonImpl(this.content));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
