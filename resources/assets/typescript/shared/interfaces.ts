export interface ICourse {
    id: number;
    status: string;
    name: string;
    abbreviation: string;
    number: string;
    topics: ITopic[];
}

export interface ITopic
{
    id: number,
    title: string;
    status: string;
    learnItems: ILearnItem[];
    testItems: ITestItem[];
    reviewItems: IReviewItem[];
    exampleReview: IReviewItem[];
}

export interface ILearnItem
{
    title: string;
    name: string;
}

export interface ITestItem
{
    title: string;
    question: string;
    options : string[];
    answer: string;
}

export interface IReviewItem
{
    title: string;
    sections: ISection[];
}

export interface ISection
{
    title: string;
    content: string;
    imagePath: string;
}

export class InteractiveMolecule implements ILearnItem 
{
    title: string;
    name: string;
    imagePath: string;
    colorLocationAssociations: IColorLocationAssociation[];
}

export class PracticeProblem implements ILearnItem, IFillInTheBlank
{
    title: string;
    name: string;
    imagePath: string;
    question: string;
    options : string[];
    answer: string;
    explanation: string;
}

export class IColorLocationAssociation
{
    color: string;
    location: string;
    description: string;

}

export interface IFillInTheBlank {
    question: string;
    options : string[];
    answer: string;
}
