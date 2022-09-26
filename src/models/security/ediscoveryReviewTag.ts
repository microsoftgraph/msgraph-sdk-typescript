import {ChildSelectability} from './childSelectability';
import {createEdiscoveryReviewTagFromDiscriminatorValue} from './createEdiscoveryReviewTagFromDiscriminatorValue';
import {Tag} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EdiscoveryReviewTag extends Tag implements Parsable {
    /** Indicates whether a single or multiple child tags can be associated with a document. Possible values are: One, Many.  This value controls whether the UX presents the tags as checkboxes or a radio button group. */
    private _childSelectability?: ChildSelectability | undefined;
    /** Returns the tags that are a child of a tag. */
    private _childTags?: EdiscoveryReviewTag[] | undefined;
    /** Returns the parent tag of the specified tag. */
    private _parent?: EdiscoveryReviewTag | undefined;
    /**
     * Gets the childSelectability property value. Indicates whether a single or multiple child tags can be associated with a document. Possible values are: One, Many.  This value controls whether the UX presents the tags as checkboxes or a radio button group.
     * @returns a childSelectability
     */
    public get childSelectability() {
        return this._childSelectability;
    };
    /**
     * Sets the childSelectability property value. Indicates whether a single or multiple child tags can be associated with a document. Possible values are: One, Many.  This value controls whether the UX presents the tags as checkboxes or a radio button group.
     * @param value Value to set for the childSelectability property.
     */
    public set childSelectability(value: ChildSelectability | undefined) {
        this._childSelectability = value;
    };
    /**
     * Gets the childTags property value. Returns the tags that are a child of a tag.
     * @returns a ediscoveryReviewTag
     */
    public get childTags() {
        return this._childTags;
    };
    /**
     * Sets the childTags property value. Returns the tags that are a child of a tag.
     * @param value Value to set for the childTags property.
     */
    public set childTags(value: EdiscoveryReviewTag[] | undefined) {
        this._childTags = value;
    };
    /**
     * Instantiates a new EdiscoveryReviewTag and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.security.ediscoveryReviewTag";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "childSelectability": n => { this.childSelectability = n.getEnumValue<ChildSelectability>(ChildSelectability); },
            "childTags": n => { this.childTags = n.getCollectionOfObjectValues<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
            "parent": n => { this.parent = n.getObjectValue<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the parent property value. Returns the parent tag of the specified tag.
     * @returns a ediscoveryReviewTag
     */
    public get parent() {
        return this._parent;
    };
    /**
     * Sets the parent property value. Returns the parent tag of the specified tag.
     * @param value Value to set for the parent property.
     */
    public set parent(value: EdiscoveryReviewTag | undefined) {
        this._parent = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<ChildSelectability>("childSelectability", this.childSelectability);
        writer.writeCollectionOfObjectValues<EdiscoveryReviewTag>("childTags", this.childTags);
        writer.writeObjectValue<EdiscoveryReviewTag>("parent", this.parent);
    };
}
