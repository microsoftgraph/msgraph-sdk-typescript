import {BaseCollectionPaginationCountResponse} from '../';
import {createExternalGroupFromDiscriminatorValue} from './createExternalGroupFromDiscriminatorValue';
import {ExternalGroup} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the groups property of the microsoft.graph.externalConnectors.externalConnection entity. */
export class ExternalGroupCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: ExternalGroup[] | undefined;
    /**
     * Instantiates a new ExternalGroupCollectionResponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "value": n => { this.value = n.getCollectionOfObjectValues<ExternalGroup>(createExternalGroupFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ExternalGroup>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a externalGroup
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ExternalGroup[] | undefined) {
        this._value = value;
    };
}
