import {createIosHomeScreenFolderPageFromDiscriminatorValue} from './createIosHomeScreenFolderPageFromDiscriminatorValue';
import {IosHomeScreenFolderPageImpl, IosHomeScreenItemImpl} from './index';
import {IosHomeScreenFolder} from './iosHomeScreenFolder';
import {IosHomeScreenFolderPage} from './iosHomeScreenFolderPage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosHomeScreenFolderImpl extends IosHomeScreenItemImpl implements IosHomeScreenFolder {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Pages of Home Screen Layout Icons which must be applications or web clips. This collection can contain a maximum of 500 elements. */
    public pages?: IosHomeScreenFolderPage[] | undefined;
    /**
     * Instantiates a new IosHomeScreenFolder and sets the default values.
     * @param iosHomeScreenFolderParameterValue 
     */
    public constructor(iosHomeScreenFolderParameterValue?: IosHomeScreenFolder | undefined) {
        super(iosHomeScreenFolderParameterValue);
        this.additionalData = iosHomeScreenFolderParameterValue?.additionalData ? iosHomeScreenFolderParameterValue?.additionalData! : {};
        const pagesArrValue: IosHomeScreenFolderPageImpl[] = []; iosHomeScreenFolderParameterValue.pages?.forEach(element => {pagesArrValue.push(element instanceof IosHomeScreenFolderPageImpl? element : new IosHomeScreenFolderPageImpl(element));});
        this.pages = pagesArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "pages": n => { this.pages = n.getCollectionOfObjectValues<IosHomeScreenFolderPageImpl>(createIosHomeScreenFolderPageFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.pages && this.pages.length != 0){        const pagesArrValue: IosHomeScreenFolderPageImpl[] = []; this.pages?.forEach(element => {pagesArrValue.push(element instanceof IosHomeScreenFolderPageImpl? element : new IosHomeScreenFolderPageImpl(element));});
            writer.writeCollectionOfObjectValues<IosHomeScreenFolderPageImpl>("pages", pagesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
