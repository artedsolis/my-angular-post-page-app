export class AppareilService {
    posts = [
        {
            title: 'My first post',
            content:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente rerum non illum culpa nihil sit aperiam amet optio asperiores unde, eius sunt. Blanditiis beatae vero, consequatur quidem itaque enim consequuntur.',
            evaluation: 'Love it',
        },
        {
            title: 'This is my second post coming from an array',
            content:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente rerum non illum culpa nihil sit aperiam amet optio asperiores unde, eius sunt. Blanditiis beatae vero, consequatur quidem itaque enim consequuntur.',
            evaluation: 'Hate it',
        },
        {
            title: 'My poor third post',
            content:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente rerum non illum culpa nihil sit aperiam amet optio asperiores unde, eius sunt. Blanditiis beatae vero, consequatur quidem itaque enim consequuntur.',
            evaluation: 'Hate it',
        },
        {
            title: 'Mon quatrième post',
            content:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente rerum non illum culpa nihil sit aperiam amet optio asperiores unde, eius sunt. Blanditiis beatae vero, consequatur quidem itaque enim consequuntur.',
            evaluation: 'Love it',
        },
    ];

    giveLikesOnAll() {
        for (let post of this.posts) {
            post.evaluation = 'Love it';
        }
    }

    giveDontLikesOnAll() {
        for (let post of this.posts) {
            post.evaluation = 'Hate it';
        }
    }

    giveLoveToOne(index: number) {
        this.posts[index].evaluation = 'Love it';
    }

    giveHateToOne(index: number) {
        this.posts[index].evaluation = 'Hate it';
    }
}
