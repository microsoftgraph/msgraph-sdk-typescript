import {createEdiscoveryReviewSetQueryFromDiscriminatorValue} from './createEdiscoveryReviewSetQueryFromDiscriminatorValue';
import {DataSet, EdiscoveryReviewSetQuery} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EdiscoveryReviewSet extends DataSet implements Parsable {
    /** Represents queries within the review set. */
    private _queries?: EdiscoveryReviewSetQuery[] | undefined;
    /**
     * Instantiates a new EdiscoveryReviewSet and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.security.ediscoveryReviewSet";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "queries": n => { this.queries = n.getCollectionOfObjectValues<EdiscoveryReviewSetQuery>(createEdiscoveryReviewSetQueryFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the queries property value. Represents queries within the review set.
     * @returns a ediscoveryReviewSetQuery
     */
    public get queries() {
        return this._queries;
    };
    /**
     * Sets the queries property value. Represents queries within the review set.
     * @param value Value to set for the queries property.
     */
    public set queries(value: EdiscoveryReviewSetQuery[] | undefined) {
        this._queries = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<EdiscoveryReviewSetQuery>("queries", this.queries);
    };
}
