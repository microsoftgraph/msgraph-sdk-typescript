import {createThumbnailFromDiscriminatorValue} from './createThumbnailFromDiscriminatorValue';
import {EntityImpl, ThumbnailImpl} from './index';
import {Thumbnail} from './thumbnail';
import {ThumbnailSet} from './thumbnailSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ThumbnailSetImpl extends EntityImpl implements ThumbnailSet {
    /** A 1920x1920 scaled thumbnail. */
    private _large?: Thumbnail | undefined;
    /** A 176x176 scaled thumbnail. */
    private _medium?: Thumbnail | undefined;
    /** A 48x48 cropped thumbnail. */
    private _small?: Thumbnail | undefined;
    /** A custom thumbnail image or the original image used to generate other thumbnails. */
    private _source?: Thumbnail | undefined;
    /**
     * Instantiates a new thumbnailSet and sets the default values.
     * @param thumbnailSetParameterValue 
     */
    public constructor(thumbnailSetParameterValue?: ThumbnailSet | undefined) {
        super(thumbnailSetParameterValue);
        this._large = thumbnailSetParameterValue?.large;
        this._medium = thumbnailSetParameterValue?.medium;
        this._small = thumbnailSetParameterValue?.small;
        this._source = thumbnailSetParameterValue?.source;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "large": n => { this.large = n.getObjectValue<ThumbnailImpl>(createThumbnailFromDiscriminatorValue); },
            "medium": n => { this.medium = n.getObjectValue<ThumbnailImpl>(createThumbnailFromDiscriminatorValue); },
            "small": n => { this.small = n.getObjectValue<ThumbnailImpl>(createThumbnailFromDiscriminatorValue); },
            "source": n => { this.source = n.getObjectValue<ThumbnailImpl>(createThumbnailFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the large property value. A 1920x1920 scaled thumbnail.
     * @returns a ThumbnailInterface
     */
    public get large() {
        return this._large;
    };
    /**
     * Sets the large property value. A 1920x1920 scaled thumbnail.
     * @param value Value to set for the large property.
     */
    public set large(value: Thumbnail | undefined) {
        if(value) {
            this._large = value instanceof ThumbnailImpl? value : new ThumbnailImpl(value);
        }
    };
    /**
     * Gets the medium property value. A 176x176 scaled thumbnail.
     * @returns a ThumbnailInterface
     */
    public get medium() {
        return this._medium;
    };
    /**
     * Sets the medium property value. A 176x176 scaled thumbnail.
     * @param value Value to set for the medium property.
     */
    public set medium(value: Thumbnail | undefined) {
        if(value) {
            this._medium = value instanceof ThumbnailImpl? value : new ThumbnailImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.large){
            writer.writeObjectValue<ThumbnailImpl>("large", (!this.large || this.large instanceof ThumbnailImpl? this.large : new ThumbnailImpl(this.large)));
        }
        if(this.medium){
            writer.writeObjectValue<ThumbnailImpl>("medium", (!this.medium || this.medium instanceof ThumbnailImpl? this.medium : new ThumbnailImpl(this.medium)));
        }
        if(this.small){
            writer.writeObjectValue<ThumbnailImpl>("small", (!this.small || this.small instanceof ThumbnailImpl? this.small : new ThumbnailImpl(this.small)));
        }
        if(this.source){
            writer.writeObjectValue<ThumbnailImpl>("source", (!this.source || this.source instanceof ThumbnailImpl? this.source : new ThumbnailImpl(this.source)));
        }
    };
    /**
     * Gets the small property value. A 48x48 cropped thumbnail.
     * @returns a ThumbnailInterface
     */
    public get small() {
        return this._small;
    };
    /**
     * Sets the small property value. A 48x48 cropped thumbnail.
     * @param value Value to set for the small property.
     */
    public set small(value: Thumbnail | undefined) {
        if(value) {
            this._small = value instanceof ThumbnailImpl? value : new ThumbnailImpl(value);
        }
    };
    /**
     * Gets the source property value. A custom thumbnail image or the original image used to generate other thumbnails.
     * @returns a ThumbnailInterface
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. A custom thumbnail image or the original image used to generate other thumbnails.
     * @param value Value to set for the source property.
     */
    public set source(value: Thumbnail | undefined) {
        if(value) {
            this._source = value instanceof ThumbnailImpl? value : new ThumbnailImpl(value);
        }
    };
}
