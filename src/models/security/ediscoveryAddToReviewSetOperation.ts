import {AdminMember1, CaseOperation, EdiscoveryReviewSet, EdiscoverySearch} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EdiscoveryAddToReviewSetOperation extends CaseOperation implements Parsable {
    /** eDiscovery review set to which items matching source collection query gets added. */
    private _reviewSet?: EdiscoveryReviewSet | AdminMember1 | undefined;
    /** eDiscovery search that gets added to review set. */
    private _search?: EdiscoverySearch | AdminMember1 | undefined;
    /**
     * Instantiates a new EdiscoveryAddToReviewSetOperation and sets the default values.
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
            "reviewSet": n => { this.reviewSet = n.getObjectValue<EdiscoveryReviewSet>(createEdiscoveryReviewSetFromDiscriminatorValue); },
            "search": n => { this.search = n.getObjectValue<EdiscoverySearch>(createEdiscoverySearchFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the reviewSet property value. eDiscovery review set to which items matching source collection query gets added.
     * @returns a admin
     */
    public get reviewSet() {
        return this._reviewSet;
    };
    /**
     * Sets the reviewSet property value. eDiscovery review set to which items matching source collection query gets added.
     * @param value Value to set for the reviewSet property.
     */
    public set reviewSet(value: EdiscoveryReviewSet | AdminMember1 | undefined) {
        this._reviewSet = value;
    };
    /**
     * Gets the search property value. eDiscovery search that gets added to review set.
     * @returns a admin
     */
    public get search() {
        return this._search;
    };
    /**
     * Sets the search property value. eDiscovery search that gets added to review set.
     * @param value Value to set for the search property.
     */
    public set search(value: EdiscoverySearch | AdminMember1 | undefined) {
        this._search = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<EdiscoveryReviewSet>("reviewSet", this.reviewSet);
        writer.writeObjectValue<EdiscoverySearch>("search", this.search);
    };
}
