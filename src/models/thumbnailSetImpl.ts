import {createThumbnailFromDiscriminatorValue} from './createThumbnailFromDiscriminatorValue';
import {EntityImpl, ThumbnailImpl} from './index';
import {Thumbnail} from './thumbnail';
import {ThumbnailSet} from './thumbnailSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class ThumbnailSetImpl extends EntityImpl implements Parsable, ThumbnailSet {
    /** A 1920x1920 scaled thumbnail. */
    public large?: Thumbnail | undefined;
    /** A 176x176 scaled thumbnail. */
    public medium?: Thumbnail | undefined;
    /** A 48x48 cropped thumbnail. */
    public small?: Thumbnail | undefined;
    /** A custom thumbnail image or the original image used to generate other thumbnails. */
    public source?: Thumbnail | undefined;
    /**
     * Instantiates a new thumbnailSet and sets the default values.
     * @param thumbnailSetParameterValue 
     */
    public constructor(thumbnailSetParameterValue?: ThumbnailSet | undefined) {
        super();
        this.large = thumbnailSetParameterValue?.large ;
        this.medium = thumbnailSetParameterValue?.medium ;
        this.small = thumbnailSetParameterValue?.small ;
        this.source = thumbnailSetParameterValue?.source ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.large){
        writer.writeObjectValue<ThumbnailImpl>("large", new ThumbnailImpl(this.large));
        }
        if(this.medium){
        writer.writeObjectValue<ThumbnailImpl>("medium", new ThumbnailImpl(this.medium));
        }
        if(this.small){
        writer.writeObjectValue<ThumbnailImpl>("small", new ThumbnailImpl(this.small));
        }
        if(this.source){
        writer.writeObjectValue<ThumbnailImpl>("source", new ThumbnailImpl(this.source));
        }
    };
}
