import {createFieldValueSetFromDiscriminatorValue} from './createFieldValueSetFromDiscriminatorValue';
import {FieldValueSet} from './fieldValueSet';
import {BaseItemVersionImpl, FieldValueSetImpl} from './index';
import {ListItemVersion} from './listItemVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class ListItemVersionImpl extends BaseItemVersionImpl implements ListItemVersion, Parsable {
    /** A collection of the fields and values for this version of the list item. */
    public fields?: FieldValueSet | undefined;
    /**
     * Instantiates a new listItemVersion and sets the default values.
     * @param listItemVersionParameterValue 
     */
    public constructor(listItemVersionParameterValue?: ListItemVersion | undefined) {
        super();
        this.fields = listItemVersionParameterValue?.fields ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fields": n => { this.fields = n.getObjectValue<FieldValueSetImpl>(createFieldValueSetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.fields){
        writer.writeObjectValue<FieldValueSetImpl>("fields", new FieldValueSetImpl(this.fields));
        }
    };
}
