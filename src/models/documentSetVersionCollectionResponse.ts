import {createDocumentSetVersionFromDiscriminatorValue} from './createDocumentSetVersionFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, DocumentSetVersion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the documentSetVersions property of the microsoft.graph.listItem entity.
 */
export class DocumentSetVersionCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: DocumentSetVersion[] | undefined;
    /**
     * Instantiates a new DocumentSetVersionCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<DocumentSetVersion>(createDocumentSetVersionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DocumentSetVersion>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a documentSetVersion
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: DocumentSetVersion[] | undefined) {
        this._value = value;
    };
}
